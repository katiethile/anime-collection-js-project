class User < ApplicationRecord
    has_many :animes 
    before_validation :make_title_case     

    private

    def make_title_case
    self.username = self.username.titlecase
    end
end
