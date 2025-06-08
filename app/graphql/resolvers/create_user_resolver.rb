module Resolvers
  class CreateUserResolver < BaseResolver
    def self.call(args, context)
      user = User.new(
        email: args[:email],
        name: args[:name]
      )

      if user.save
        {
          user: user,
          errors: []
        }
      else
        {
          user: nil,
          errors: user.errors.full_messages
        }
      end
    end
  end
end
