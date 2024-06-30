class Api::V1::BlogsController < ApiController
  def index
    render json: blogs, each_serializer: BlogSerializer
  end

  private

  def user
    @user ||= User.first
  end

  def blogs
    @blogs ||= user.blogs.includes(:notion).order(created_at: :desc)
  end
end
