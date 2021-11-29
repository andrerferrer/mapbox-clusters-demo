puts "Create some Restaurants"

1000.times do
  restaurant = Restaurant.create!(
    name: Faker::Movies::StarWars.planet,
    address: Faker::Address.country
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
