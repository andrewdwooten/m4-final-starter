require 'rails_helper'

RSpec.describe User, type: :model do
  it 'has many links' do
    user = User.create(email: 'test@test.com',
                       password: 'password',
                       password_confirmation: 'bad_password')
    expect(user).to respond_to(:links)
  end

  it 'is invalid without a unique email' do
    User.create(email: 'test@test.com',
                password: 'password',
                password_confirmation: 'bad_password')
    user = User.create(email: 'test@test.com',
                       password: 'password',
                       password_confirmation: 'bad_password')
    expect(user).to be_invalid
  end
  it 'is invalid without an email' do
    user = User.create(password: 'password',
                       password_confirmation: 'bad_password')
    expect(user).to be_invalid
  end

  it 'invalid without matching password and password confirmation' do
    user = User.create(email: 'test@test.com',
                       password: 'password',
                       password_confirmation: 'bad_password')
    expect(user).to be_invalid
  end
end
