class CareersController < ApplicationController
  def index
  end

  def new
  end

  def show
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
end
