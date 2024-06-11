class Api::V1::UsersController < ApiController
  def show
    render json: user, serializer: UserSerializer
  end

  private

  def user
    @user ||= User.first
  end
end
