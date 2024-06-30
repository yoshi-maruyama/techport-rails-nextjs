class BlogsController < ApplicationController
  def index
  end

  def new
  end

  private

  def user
    @user ||= User.first
  end

  def blogs
    @blogs ||= user.blogs
  end
  helper_method :blogs

  def blog
    @blog ||= blogs.build
  end
  helper_method :blog
end
