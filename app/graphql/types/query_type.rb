# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    # get all users
    field :users, resolver: Resolvers::UsersResolver

    # get a specific user by ID
    field :user, resolver: Resolvers::UserResolver
  end
end
