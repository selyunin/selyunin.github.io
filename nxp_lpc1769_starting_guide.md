Starting guide for LPC1769 development board with CMSIS DAP probe
===

I have started recently to familiarize myself with the 
state-of-the-art (ARM) microcontrollers and the available tools.

In this tutorial I want to document the steps to start
developing projects for the NXP LPC1769 microcontroller.



Resources:
* Official NXP web-page describing the development board: [link][1]
* Board description from the digikey: [link][2]
* Data sheet for the LPC1769 microcontroller: [link][3]
* Example code: [link][4]

IDEs:
* LPCXpresso (older IDE, now NXP recommends to use the MCUXpresso).
	I had also problems with the high DPI display, since underlying eclipse 
	version does not support for such displays, and the icons were so
	small that I need a magnifying glass for that
* MCUXpresso
* MDK ARM -- is a tool from Keil, for which `digikeys` 8k Euro, which 
  is not an option for me.



[1]: https://www.nxp.com/support/developer-resources/hardware-development-tools/lpcxpresso-boards/lpcxpresso-board-for-lpc1769-with-cmsis-dap-probe:OM13085

[2]: https://media.digikey.com/pdf/Data%20Sheets/NXP%20PDFs/OM13085_web.pdf

[3]: https://www.nxp.com/docs/en/data-sheet/LPC1769_68_67_66_65_64_63.pdf

[4]: https://www.nxp.com/support/developer-resources/software-development-tools/lpc-developer-resources-/lpcopen-libraries-and-examples/lpcopen-software-development-platform-lpc17xx:LPCOPEN-SOFTWARE-FOR-LPC17XX
