class Anime < ApplicationRecord
    belongs_to :user 
    before_validation :make_title_case     

    private

    def make_title_case
    self.title = self.title.titlecase
    end
end
