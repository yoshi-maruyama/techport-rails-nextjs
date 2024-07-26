class PortfoliosController < ApplicationController
  def index
  end

  def show
  end

  def new
  end

  def create
    portfolio_notion_form.assign_attributes(portfolio_params)
    if portfolio_notion_form.save
      flash[:success] = "Record successfully created"
      redirect_to portfolios_path
    else
      flash.now[:error] = "Failed to create Record"
      render :new
    end
  end

  def edit
  end

  def update
    portfolio_notion_form.assign_attributes(portfolio_params)
    if portfolio_notion_form.save
      flash[:success] = "Record successfully updated"
      redirect_to portfolios_path
    else
      flash.now[:error] = "Failed to update Record"
      render :new
    end
  end

  def destroy
    if portfolio.destroy
      flash[:success] = "Record successfully deleted"
      redirect_to portfolios_path
    else
      flash[:error] = "Failed to delete Record"
      redirect_to edit_portfolio_path(portfolio)
    end
  end

  private

  def user
    @user ||= User.first
  end

  def portfolios
    @portfolios ||= user.portfolios
  end
  helper_method :portfolios

  def portfolio
    @portfolio ||= portfolios.find_by(id: params[:id]) || portfolios.build
  end
  helper_method :portfolio

  def portfolio_notion_form
    @portfolio_notion_form ||= PortfolioNotionForm.new(portfolio:)
  end
  helper_method :portfolio_notion_form

  def portfolio_params
    params.require(:portfolio).permit(:title, :url, :summary, :notion_key)
  end
end
