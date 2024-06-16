class Api::V1::CareersController < ApiController
  def index
    render json: careers, each_serializer: CareerSerializer
  end

  private

  def user
    @user ||= User.first
  end

  def careers
    @careers ||= user.careers.order(started_at: :asc)
  end
end
