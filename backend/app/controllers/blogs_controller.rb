class BlogsController < ApplicationController
  def index
  end

  private

  def user
    @user ||= User.first
  end

  def blogs
    @blogs ||= user.blogs
  end
  helper_method :blogs
end
