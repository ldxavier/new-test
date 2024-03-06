<template>
  <div class="task">
    <h2>Task List</h2>
      <input type="text"
        v-model="txtTask"
        placeholder="Enter task"
        @keyup.enter="AddTask"
      >
      <button @click="AddTask">Add Task</button><br/>

      <div>
        <h2>ALL ITEMS</h2>
        <span
          v-for="(list, index) in ListTask"
          :key="index"
          >
        <input
          v-if="list.length != 0"
          type="checkbox"
          v-model="CheckTask">
        {{ list }}
        </span>
      </div>


  </div>
</template>

<script setup>
import { ref } from "vue";

const txtTask = ref("");
const ListTask = ref([]);

const AddTask = () => {
  if (txtTask.value.trim() === "") {
    alert("Please enter a task.");
    txtTask.value = "";
    return;
  }
  ListTask.value.forEach((item) => {
    if (item === txtTask.value) {
      alert("Task already exists");
      txtTask.value = "";
    }
  });
  ListTask.value.push(txtTask.value);
  txtTask.value = "";
};


</script>

<style scoped>
  .task {
    margin-top: 100px
  }
</style>
