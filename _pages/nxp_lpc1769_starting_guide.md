---
layout: default
title: 'NXP Development'
permalink: /nxp-lpc/
---

Starting with LPC1769 development board
=======================================

Starting guide for the "LPC1769 development board with CMSIS DAP probe".

I have started recently to familiarize myself with the 
state-of-the-art (ARM) microcontrollers and the available
development tools. It was quite some years ago, since I had
my last experience with `8051`-like and `AVR` microcontrollers.

In this tutorial we will cover the basics for starting developing for
the NXP LPC1769 microcontroller, in particularly when using
the LPC1769 development board.

## Things we need 

In order to get started we need the following:
* **Hardware**. 
	I am using the `DevBoard OM13085: LPCXpresso board for
	LPC1769 with CMSIS DAP probe`, [link][1];
* **IDE**. Although it is not a requirement to use an IDE 
  (i.e. one can just start with a cross-compiler tool-chain), 
	for ease of start it is definitely useful;
* **Example code**. It would take just too much time to develop
  all the functionality again from scratch, so we are going
	to start with some examples and build on top of that.

## Resouces

**Hardware:**
* Official NXP web-page describing the development board: [link][1]
* Board description from the digikey: [link][2]
* Data sheet for the LPC1769 microcontroller: [link][3]

**IDE:**
* `LPCXpresso`, [link][6], (an older IDE, NXP recommends now to use the `MCUXpresso`).
	I also had problems with this one with a high DPI display 
	(e.g. when using a Lenovo Laptop), 
	since the underlying eclipse version does not support such displays, 
	the icons were so small that one would need a magnifying glass for that;
* `MCUXpresso` IDE [link][5]. Documentation and user guides are located 
  in the root project directory of the `MCUXpresso`
  (i.e. `/path/to/your/mcuxpresso`, the default path on a 
	Linux machine is `/usr/local/mcuxpressoide-*`);
* `MDK ARM` -- is a tool from [Keil](https://www.keil.com/download/product/), 
  for which `digikeys` 8k Euro, which is a bit too expensive for the first use.

**Example code:**
* `LPCOpen` software for `LPC17xx` family: [link][4].
  A collection of projects showcasing different functionality of the 
	board (e.g. SPI, I2C, USB, UART, Timers, LEDs, RTOS, etc). 
	Although it is possible to download it from the link above,
	`LPCOpen` comes already as an archive with MCUXpresso or LPCXpresso
	(located in `/path/to/your/mcuxpresso/ide/Examples/LPCOpen/` or
	`/path/to/your/lpcxpresso/lpcxpresso/Examples/LPCOpen/`).
	Our target is `lpcopen_2_10_lpcxpresso_nxp_lpcxpresso_1769.zip` 
  The quickstart quide ([link][7]) helps you to import the 
	`LPCOpen` in LPCXpresso IDE.

* George Pittarelli's `umd-lpc1769` [repo][8] is also great collection of 
	example projects

Understanding Lingo:

* ARM Cortex

* CMSIS-DAP



[//]: # "References:"

[1]: https://www.nxp.com/support/developer-resources/hardware-development-tools/lpcxpresso-boards/lpcxpresso-board-for-lpc1769-with-cmsis-dap-probe:OM13085

[2]: https://media.digikey.com/pdf/Data%20Sheets/NXP%20PDFs/OM13085_web.pdf

[3]: https://www.nxp.com/docs/en/data-sheet/LPC1769_68_67_66_65_64_63.pdf

[4]: https://www.nxp.com/support/developer-resources/software-development-tools/lpc-developer-resources-/lpcopen-libraries-and-examples/lpcopen-software-development-platform-lpc17xx:LPCOPEN-SOFTWARE-FOR-LPC17XX

[5]: https://www.nxp.com/support/developer-resources/software-development-tools/mcuxpresso-software-and-tools/mcuxpresso-integrated-development-environment-ide:MCUXpresso-IDE

[6]: https://www.nxp.com/products/processors-and-microcontrollers/arm-based-processors-and-mcus/lpc-cortex-m-mcus/lpc1100-cortex-m0-plus-m0/lpcxpresso-ide-v8.2.2:LPCXPRESSO

[7]: https://www.nxp.com/docs/en/user-guide/LPCOpen-v2.xx-LPCXpresso-QSG.pdf

[8]: https://github.com/gpittarelli/umd-lpc1769
