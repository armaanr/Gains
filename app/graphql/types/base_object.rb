module Types
  class BaseObject < GraphQL::Schema::Object
    field_class Types::BaseField

    def self.single_field(klass, node_name, type, can_be_null)
      field node_name, type, null: can_be_null do
        argument :id, ID, required: true
      end
      define_method(node_name) do |id:|
        klass.find(id)
      end
    end

    def self.collection_field(klass, node_name, type, can_be_null)
      field node_name, type, null: can_be_null
      define_method(node_name) do
        klass.all
      end
    end
  end
end
