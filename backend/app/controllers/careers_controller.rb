class CareersController < ApplicationController
  def index
  end

  def new
  end

  def create
    career.assign_attributes(career_params)
    if career.save
      flash[:success] = "Record successfully created"
      redirect_to careers_path
    else
      flash[:error] = "Failed to create Record"
      render :new
    end
  end

  def show
  end

  def edit
  end

  private

  def user
    @user ||= User.first
  end

  def careers
    @careers ||= user.careers
  end
  helper_method :careers

  def career
    @career ||= careers.find_by(id: params[:id]) || careers.build
  end
  helper_method :career

  def career_params
    params.require(:career).permit(:title, :started_at, :ended_at, :description)
  end
end
