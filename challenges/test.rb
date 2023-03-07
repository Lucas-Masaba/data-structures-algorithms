# require 'nokogiri'
# require 'open-uri'

# # codewars leaderboard page doesn't specify <meta charset="utf-8">
# # for nokogiri, make sure to force utf-8. ex: Nokogiri::HTML(open(URL), nil, 'UTF-8')
# # reference: http://www.nokogiri.org/tutorials/parsing_an_html_xml_document.html#encoding


# def solution
#   # do it
#   url = 'https://www.codewars.com/users/leaderboard'
#   doc = Nokogiri::HTML(URI.open(url), nil, 'UTF-8')
#   # puts doc
#   content = doc.css("tr")
#   content.each do |piece|
#     p piece.content
#   end

# end

# solution

require 'nokogiri'
require 'open-uri'

class User
  attr_reader :name, :clan, :honor

  def initialize(name, clan, honor)
    @name = name
    @clan = clan
    @honor = honor
  end
end

class Leaderboard
  attr_reader :position

  def initialize(position)
    @position = position
  end
end

def get_leaderboard
  url = "https://www.codewars.com/users/leaderboard"
  doc = Nokogiri::HTML(URI.open(url), nil, 'UTF-8')
  leaderboard = []

  doc.css("tr.leaderboard").each_with_index do |row, index|
    username = row.css("td.username").text.strip
    clan = row.css("td.clan").text.strip.empty? ? "" : row.css("td.clan").text.strip
    honor = row.css("td.honor").text.strip.gsub(",", "").to_i

    leaderboard[index] = User.new(username, clan, honor)
  end

  Leaderboard.new(leaderboard)
end

get_leaderboard