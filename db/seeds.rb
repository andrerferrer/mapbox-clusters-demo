puts "Create some Restaurants"

100.times do
  restaurant = Restaurant.create!(
    name: Faker::Movies::StarWars.planet,
    address: "#{['Rio de Janeiro', 'Sao Paulo', 'Belo Horizonte'].sample}, Brazil"
  )
  puts "Created restaurant: #{restaurant.name} in #{restaurant.address}"
end

puts "Let's drink a beer"
puts %{
  .~~~~.
  i====i_
  |cccc|_)
  |cccc|
  `-==-'

}

puts "Done!"
