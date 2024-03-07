<template>
  <section class="task">
    <div>
      <h2>Task List</h2>
        <input type="text"
          v-model="txtTask"
          placeholder="Enter task"
          @keyup.enter="AddTask"
        >
        <button @click="AddTask">Add Task</button><br/>
    </div>

    <div v-if="ListTask.length != 0">
      <h2>ALL ITEMS</h2>
      <div
        v-for="(list, index) in ListTask"
        :key="index"
      >

        <input
          v-if="list.length != 0"
          type="checkbox"
          v-model="checked[index]">
            {{ list }}  - <button @click="delTask(index)">
            X
          </button> <br/>

      </div>
    </div>

    <div v-if="completedTask.length != 0">
      <h2>Completed Tasks</h2>
      <div
        v-for="checkTrue in completedTask"
        :key="checkTrue"
      >
        <li>{{ checkTrue }}</li>
      </div>
    </div>

    <div v-if="unCompletededTask.length != 0">
      <h2>UnCompleted Tasks</h2>
      <div
        v-for="checkFalse in unCompletededTask"
        :key="checkFalse"
      >
        <li>{{ checkFalse }}</li>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, computed } from "vue";

//var declaration
const txtTask = ref("");
const ListTask = ref([]);
const checked = ref([]);


//methods
const AddTask = () => {
  // if (txtTask.value.trim() === "") {
  //   alert("Please enter a task.");
  //   txtTask.value = "";
  //   return;
  // }
  // ListTask.value.forEach((item) => {
  //   if (item === txtTask.value) {
  //     alert("Task already exists");
  //     txtTask.value = "";
  //   }
  // });
  ListTask.value.push(txtTask.value);
  txtTask.value = "";
};

const delTask = (index) => {
  ListTask.value.splice(index, 1);
  checked.value.splice(index, 1);
};


//computed
const completedTask = computed(() => {
  return ListTask.value.filter((list, index) => {
    return checked.value[index];
  });
});

const unCompletededTask = computed(() => {
  return ListTask.value.filter((list,index) => {
    return !checked.value[index];
  } )
});

</script>

<style scoped>
  .task {
    margin-top: 100px
  }
</style>
