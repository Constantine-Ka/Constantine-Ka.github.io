<script lang="ts">
export default {
  name: "PriceRadioButtons",
  data() {
    return {
      isChoose: (null as number) || null,
      contentArr: [
        { title: "Basic", description: "Will be received in 4 days" },
        { title: "Premium", description: "Will be received in 2 days" },
        { title: "Express", description: "Will be received in a day" },
        { title: "Other", description: "Will be received in a 12 hours" },
      ],
    };
  },
  // methods: {
  //   updateChoose(event) {
  //     console.log(event.target.value);
  //     this.$emit("updateParent", {
  //       amount: this.amount,
  //       code: this.code,
  //     });
  //   },
  // },
};
</script>

<template>
  <section style="--back: #efeef4; --theme: #5e27e5;">
    <div class="paper">
      <header class="header-title">
        Choose service <span>Transfer fee</span>
      </header>

      <aside class="radio-container">
        <div
		        class="elem"
		        v-for="(elem, index) in contentArr"
		        :key="index"
        >
          <!-- radio -->
          <input type="radio" name="service" :id="index"
		          :value="index" v-model="isChoose"/>
          <label :for="index" class="lbl-radio">
            <div class="marker"></div>
            <div class="content">
              <div class="title">{{elem.title}}</div>
              <div class="subtext">{{ elem.description }}</div>
            </div>
          </label>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>

section{
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background: var(--theme);
}
.paper {
	width: 400px;
	padding: 30px;
	background: #fff;
	box-shadow: 0 10px 32px rgba(0, 0, 0, 0.5);
	border-radius: 10px;
}

.header-title {
	font-size: 20px;
	font-weight: 700;
}

.header-title span {
	font-weight: 400;
	opacity: 0.5;
}

.radio-container {
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px 0;
}

.lbl-radio {
	display: block;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	padding: 15px;
	padding-left: 50px;
	position: relative;
	cursor: pointer;
}

.lbl-radio .content .title {
	font-weight: 600;
	margin-bottom: 7px;
}

.lbl-radio .content .subtext {
	opacity: 0.5;
	font-size: 14px;
}

.marker {
	width: 15px;
	height: 15px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 15px;
	position: absolute;
	left: 20px;
	top: 40%;
}

input[type='radio']:checked + .lbl-radio {
	border-color: var(--theme);
}

input[type='radio']:checked + .lbl-radio > .marker {
	border: 4px solid var(--theme);
}

input[type='radio'] {
	display: none;
}

</style>