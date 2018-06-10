Starting with LPC1769 development board
=======================================

Starting guide for the "LPC1769 development board with CMSIS DAP probe".

I have started recently to familiarize myself with the 
state-of-the-art (ARM) microcontrollers and the available
development tools. 

In this tutorial we will cover the basics for starting developing for
the NXP LPC1769 microcontroller, in particularly when using
the LPC1769 development board.

In order to get started we basically need the following:
* Hardware. 
	I am using the `DevBoard OM13085: LPCXpresso board for
	LPC1769 with CMSIS DAP probe`, [link][1]
* IDE. Although I think it is not a requirement to use an IDE 
  (i.e. one can just start with a cross-compiler tool-chain), 
	but for ease of start it is definitely useful
* Example code. It would take just too much time to develop
  all the functionality again from scratch, so we are going
	to start with some examples and build on that one.


**Resources:**
* Official NXP web-page describing the development board: [link][1]
* Board description from the digikey: [link][2]
* Data sheet for the LPC1769 microcontroller: [link][3]
* Example code: [link][4]

**IDEs:**
* LPCXpresso (older IDE, now NXP recommends to use the MCUXpresso).
	I had also problems with the high DPI display, since underlying eclipse 
	version does not support for such displays, and the icons were so
	small that I would need a magnifying glass for that.
* MCUXpresso
* MDK ARM -- is a tool from [Keil](https://www.keil.com/download/product/), 
  for which `digikeys` 8k Euro, which is not an option for me.


[1]: https://www.nxp.com/support/developer-resources/hardware-development-tools/lpcxpresso-boards/lpcxpresso-board-for-lpc1769-with-cmsis-dap-probe:OM13085

[2]: https://media.digikey.com/pdf/Data%20Sheets/NXP%20PDFs/OM13085_web.pdf

[3]: https://www.nxp.com/docs/en/data-sheet/LPC1769_68_67_66_65_64_63.pdf

[4]: https://www.nxp.com/support/developer-resources/software-development-tools/lpc-developer-resources-/lpcopen-libraries-and-examples/lpcopen-software-development-platform-lpc17xx:LPCOPEN-SOFTWARE-FOR-LPC17XX

