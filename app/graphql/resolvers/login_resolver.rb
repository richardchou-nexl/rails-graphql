module Resolvers
  class LoginResolver < BaseResolver
    def self.call(args, context)
      user = User.find_by(email: args[:email])

      if user && user.authenticate(args[:password])
        token = JWT.encode({ user_id: user.id }, "my_secret_key", "HS256")
        {
          token: token
        }
      else
        raise GraphQL::ExecutionError, "Invalid email or password"
      end
    end
  end
end
