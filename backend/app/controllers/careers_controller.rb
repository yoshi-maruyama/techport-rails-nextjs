class CareersController < ApplicationController
  def index
  end

  def new
  end

  def create
    career_notion.assign_attributes(career_params)
    if career_notion.save
      flash[:success] = "Record successfully created"
      redirect_to careers_path
    else
      flash.now[:error] = "Failed to create Record"
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
    career_notion.assign_attributes(career_params)
    if career_notion.save
      flash[:success] = "Record successfully updated"
      redirect_to careers_path
    else
      flash.now[:error] = "Failed to update Record"
      render :edit
    end
  end

  def destroy
    if career.destroy
      flash[:success] = "Record successfully deleted"
      redirect_to careers_path
    else
      flash[:error] = "Failed to delete Record"
      redirect_to edit_career_path(career)
    end
  end

  private

  def user
    @user ||= User.first
  end

  def careers
    @careers ||= user.careers
  end
  helper_method :careers

  def career
    @career ||= careers.find_by(id: params[:id]) || careers.build
  end
  helper_method :career

  def career_notion
    @career_notion ||= CareerNotionForm.new(career:)
  end
  helper_method :career_notion

  def career_params
    params.require(:career).permit(:title, :started_at, :ended_at, :description, :notion_key)
  end
end
