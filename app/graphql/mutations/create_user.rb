class Mutations::CreateUser < Mutations::BaseMutation
  argument :email, String, required: true
  argument :name, String, required: true

  field :user, Types::UserType, null: true
  field :errors, [ String ], null: false

  def resolve(email:, name:)
    Resolvers::CreateUserResolver.call({
      email: email,
      name: name
    }, context)
  end
end
