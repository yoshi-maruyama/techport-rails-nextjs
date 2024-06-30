class BlogsController < ApplicationController
  def index
  end

  def new
  end

  def create
    blog_notion_form.assign_attributes(blog_params)
    if blog_notion_form.save
      flash[:success] = "Record successfully created"
      redirect_to blogs_path
    else
      flash.now[:error] = "Failed to create Record"
      render :new
    end
  end

  def edit
  end

  def update
    blog_notion_form.assign_attributes(blog_params)
    if blog_notion_form.save
      flash[:success] = "Record successfully updated"
      redirect_to blogs_path
    else
      flash.now[:error] = "Failed to update Record"
      render :edit
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
    @blog ||= blogs.find_by(id: params[:id]) || blogs.build
  end
  helper_method :blog

  def blog_notion_form
    @blog_notion_form ||= BlogNotionForm.new(blog:)
  end
  helper_method :blog_notion_form

  def blog_params
    params.require(:blog).permit(:title, :summary, :notion_key)
  end
end
