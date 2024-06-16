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
end
