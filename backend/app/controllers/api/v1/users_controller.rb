class Api::V1::UsersController < ApiController
  def show
    render json: user
  end

  private

  def user
    @user ||= User.first
  end
end
