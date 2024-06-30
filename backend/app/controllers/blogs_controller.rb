class BlogsController < ApplicationController
  def index
  end

  def new
  end

  def create
    blog.assign_attributes(blog_params)
    if blog.save
      flash[:success] = "Record successfully created"
      redirect_to blogs_path
    else
      flash.now[:error] = "Failed to create Record"
      render :new
    end
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

  def blog_params
    params.require(:blog).permit(:title, :summary)
  end
end
