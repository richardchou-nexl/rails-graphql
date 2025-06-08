module Mutations
  class Login < BaseMutation
    argument :email, String, required: true
    argument :password, String, required: true

    field :token, String, null: false

    def resolve(email:, password:)
      Resolvers::LoginResolver.call({
        email: email,
        password: password
      }, context)
    end
  end
end
