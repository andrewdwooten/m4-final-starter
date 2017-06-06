require 'rails_helper'

RSpec.describe Link, type: :model do
  it 'is invalid without a title' do
    link = Link.create(url: 'http://www.yahoo.com')
    expect(link).to be_invalid
  end

  it 'is invalid without a valid url' do
    link = Link.create(url: 'h34//w.gigl.y',
                       title: 'Bad Url')
    expect(link).to be_invalid
  end

  it 'belongs to a user' do
    link = Link.create(url: 'http://www.yahoo.com',
                       title: 'Yahoo!')
    expect(link).to respond_to(:user)
  end
end
