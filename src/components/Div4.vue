<template>
            <div>
              <kinesis-container event="scroll">
                <kinesis-element
                  tag="img"
                  :transformOrigin="sunOrigin"
                  :strength="100"
                  type="rotate"
                  width="50"
                  :src="require('../assets/sun.png')"
                />
                <kinesis-element :transformOrigin="earthmoonOrigin" :strength="800" type="rotate">
                  <img :src="require('../assets/earth.png')" width="50" />
                  <kinesis-element
                    tag="img"
                    :src="require('../assets/venus.png')"
                    width="50"
                    :transformOrigin="moonOrigin"
                    :strength="1200"
                    type="rotate"
                  />
                </kinesis-element>
                <kinesis-element
                  tag="img"
                  :src="require('../assets/mars.png')"
                  width="50"
                  :transformOrigin="marsOrigin"
                  :strength="500"
                  type="rotate"
                />
              </kinesis-container>
            </div>
</template>