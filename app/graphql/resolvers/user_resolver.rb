module Resolvers
  class UserResolver < BaseResolver
    type Types::UserType, null: false
    argument :id, ID, required: true

    def resolve(id:)
      ::User.find(id)
    end
  end
end
