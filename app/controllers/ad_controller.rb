class AdController < ApplicationController

  def show
    @ad = Ad.find(params[:id])
  end

  def new 
    @ad = Ad.new
  end

  def create

    model = params[:ad]
    ad = Ad.new()
    ad.title = model[:title]
    ad.description = model[:description]
    ad.image = model[:image]

    puts 'THIS IS THE COMMENT'
    factory = RGeo::Geographic.spherical_factory
    point = factory.point(-122.33, 47.62)
    puts point
    ad.latlon = point
    puts ad.latlon

   if ad.save
    redirect_to "/ad/#{ad.id}", :notice => "Ad created successfully"
   else
    render :notice => "Ad NOT created successfully"
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
