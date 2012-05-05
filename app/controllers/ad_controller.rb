class AdController < ApplicationController

  def show
    @ad = Ad.find(params[:id])
  end

  def new 
    @ad = Ad.new
  end

  def create
    @ad = Ad.new(params[:ad])
    if @ad.save
      redirect_to "/ad/#{@ad.id}", :notice => "Ad created successfully"
    else
      render :notice => "Ad NOT created successfully"
    end
  end

end
