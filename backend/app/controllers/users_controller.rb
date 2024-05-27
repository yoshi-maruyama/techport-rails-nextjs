class UsersController < ApplicationController

  def show
  end

  def create
    user.assign_attributes(user_params)
    if user.save
      flash[:success] = "Record successfully created"
      redirect_to user_path
    else
      flash.now[:error] = "Failed to create Record"
      render :show
    end
  end

  def update
    user.assign_attributes(user_params)
    if user.save
      flash[:success] = "Record successfully updated"
      redirect_to user_path
    else
      flash.now[:error] = "Failed to update Record"
      render :show
    end
  end

  def user
    @user ||= User.first || User.new
  end
  helper_method :user


  def user_params
    params.require(:user).permit(:name, :email, :postal_code, :address)
  end
end
