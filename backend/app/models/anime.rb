class Anime < ApplicationRecord
    belongs_to :user 
    validates :rating, presence: true, numericality: { less_than_or_equal_to: 10, greater_than_or_equal_to: 0 }
end
