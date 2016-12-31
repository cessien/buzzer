#!/bin/bash
# From https://github.com/jxcore/jxcore-cordova
git clone https://github.com/jxcore/jxcore.git
cd jxcore
build_scripts/android-configure.sh /path/to/android/ndk/
build_scripts/android_compile.sh /path/to/android/ndk/ --embed-leveldown
