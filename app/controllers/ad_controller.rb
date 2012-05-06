class AdController < ApplicationController

  before_filter :authenticate_user!

  def index
    @ads = Ad.all(:conditions => ["UPPER(title) like UPPER(?)", "%#{params[:title]}%"])
    ads_hash = []
    @ads.each do |ad|
      ads_hash << {
        :title => ad.title,
        :description => ad.description,
        :user_email => "test@test.com",
        :image_url => ad.image.url,
        :latitude => ad.latitude,
        :longitude => ad.longitude
      }
    end

    render json: ads_hash
  end

  def show
    @ad = Ad.find(params[:id])
  end

  def new 
    @ad = Ad.new
  end

  def create

    model = params[:ad]
    ad = Ad.new(model)
    ad.user = current_user
    if ad.save
      render json: {
        :title => ad.title,
        :description => ad.description,
        :user_email => ad.user.email,
        :image_url => ad.image.url
      }
   else
      throw 'Failed to create Ad'
   end
  end

  def images_by_location(latitude, longitude, date_time)
    lat = latitude.to_f
    log = longitude.to_f

    lat_offset = 1.0 / 69.0 * 5.0
    log_offset = Math.cos(lat) * 5.0

    bottom = lat - lat_offset
    top = lat + lat_offset

    left = log - log_offset
    right = log + log_offset

    query = "MBRContains(GeomFromText('POLYGON((? ?, ? ?, ? ?, ? ?, ? ?))'), latlon) > 0"
    query_params = [
      bottom,
      left,
      bottom,
      right,
      top,
      right,
      top,
      left,
      bottom,
      left ]

    Ad.where(query, *query_params)
  end

end
