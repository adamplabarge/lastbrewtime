<div align="center">
    <h1>Last Brew Time</h1>
    <p>A small project to track when coffee pots where last brewed.</p>
    <hr>
    <p>Electron, React, Redux, and target package to armhf arcitechure/Raspberry Pi with 480x320 touchscreen.</p>
    <hr>
    <h3 align="left">Notes:</h3>
    <ul align="left">
        <li>Installing .deb file:<br>
	from: https://www.raspberrypi.org/forums/viewtopic.php?t=27915<br>
	 $ sudo dpkg -i filename.deb</li>
        <li>lightdm configuration - Xsession blanking:<br>
	from: https://www.bitpi.co/2015/02/14/prevent-raspberry-pi-from-sleeping/<br>
	$ sudo nano /etc/lightdm/lightdm.conf<br>
	xserver-command=X -s 0 -dpms</li>
	<li>Run terminal and execute command at startup:<br>
	from: https://www.raspberrypi.org/forums/viewtopic.php?t=66206
	$ sudo apt-get install xterm<br>
	$ mkdir -p ~/.config/autostart<br>
	$ nano ~/.config/autostart/lxterm-autostart.desktop
	[Desktop Entry]<br>
	Encoding=UTF-8<br>
	Name=Terminal autostart<br>
	Comment=Start a terminal and list directory<br>
	Exec=/usr/bin/lxterm -e 'nohup /usr/local/bin/lastbrewtime'</li>
	<li>Build for armhf (Raspberry Pi)<br>
	from: https://github.com/electron-userland/electron-builder/issues/1230#issuecomment-491494976<br>
	see package.json linux build that targets deb and armhf architechure</li>
</div>

## License

MIT © [Electron React Boilerplate](https://github.com/electron-react-boilerplate)
