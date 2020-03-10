<template>
            <div width="100" height="100">
              <kinesis-container>
                <kinesis-element
                  tag="img"
                  :src="require('../assets/Astro.png')"
                  :strength="-10"
                  width="50"
                  transformOrigin="50% 300%"
                  axis="x"
                  type="rotate"
                />
                <kinesis-element
                  tag="img"
                  width="50"
                  :src="require('../assets/Astro.png')"
                  :strength="10"
                  transformOrigin="50% 300%"
                  axis="x"
                  type="rotate"
                />
                <kinesis-element
                  tag="img"
                  width="50"
                  :src="require('../assets/Astro.png')"
                  :strength="10"
                  type="depth"
                  transformOrigin="50% 300%"
                />
              </kinesis-container>
            </div>
</template>