<template>
  <div>
    <Home/>
    <AddTodo/>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import Home from "@/views/Home";

export default {
  name: "app",
  data() {
    return {
    };
  },
 
  components: {
    TodoList,
    AddTodo
  }
};
</script>
