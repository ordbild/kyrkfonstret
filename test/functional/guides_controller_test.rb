require 'test_helper'

class GuidesControllerTest < ActionController::TestCase
  setup do
    @guide = guides(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:guides)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create guide" do
    assert_difference('Guide.count') do
      post :create, guide: { cover_image_name: @guide.cover_image_name, cover_image_uid: @guide.cover_image_uid, footer: @guide.footer, header: @guide.header, main: @guide.main, primary_color: @guide.primary_color, public: @guide.public, secondary_color: @guide.secondary_color, slug: @guide.slug, title: @guide.title }
    end

    assert_redirected_to guide_path(assigns(:guide))
  end

  test "should show guide" do
    get :show, id: @guide
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @guide
    assert_response :success
  end

  test "should update guide" do
    put :update, id: @guide, guide: { cover_image_name: @guide.cover_image_name, cover_image_uid: @guide.cover_image_uid, footer: @guide.footer, header: @guide.header, main: @guide.main, primary_color: @guide.primary_color, public: @guide.public, secondary_color: @guide.secondary_color, slug: @guide.slug, title: @guide.title }
    assert_redirected_to guide_path(assigns(:guide))
  end

  test "should destroy guide" do
    assert_difference('Guide.count', -1) do
      delete :destroy, id: @guide
    end

    assert_redirected_to guides_path
  end
end
