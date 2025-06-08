# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    # get all users
    field :users, [ Types::UserType ], null: false

    def users
      User.all
    end

    # get a specific user by ID
    field :user, Types::UserType, null: true do
      argument :id, ID, required: true
    end

    def user(id:)
      User.find(id)
    end
  end
end
