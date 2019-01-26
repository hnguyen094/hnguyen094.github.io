function love.load()
	-- anything
	love.graphics.setColor(100,100,100)
end

function love.update(dt)
	-- more things
	if gameIsPaused then return end
	if love.keyboard.isDown("up") then
		num = num + 100 * dt -- increment num by 100 per second
	end
end

function love.draw()
	love.graphics.rectangle("fill", 10, 10, 10, 10)
	love.graphics.print("This text is not black because of the line below", 100, 100)
	love.graphics.setColor(255,0,0)
	if gameIsPaused then
		love.graphics.print("paused", 100, 200)
	end
end

function love.mousepressed(x, y, button, isTouch)
	if button == 1 then
		imgx = x
		imgy = y
	end
end

-- delete when done, because this is so much faster when running code
function love.keypressed(key)
	if key == "escape" then
		love.event.push("quit")
	end
end

function love.focus(f) gameIsPaused = not f end

function love.quit()
  print("Thanks for playing! Come back soon!")
end
