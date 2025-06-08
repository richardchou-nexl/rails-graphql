class Mutations::CreateUser < Mutations::BaseMutation
  argument :email, String, required: true
  argument :name, String, required: true
  argument :password, String, required: true

  field :user, Types::UserType, null: true
  field :errors, [ String ], null: false

  def resolve(email:, name:, password:)
    Resolvers::CreateUserResolver.call({
      email: email,
      name: name,
      password: password
    }, context)
  end
end
