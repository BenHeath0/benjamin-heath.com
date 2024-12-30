<template>
    <div class="p-10">
      <p class="pb-5">
        A website with just 2 pages is lame. heres pictures of my dog
      </p>
      <div class="grid grid-cols-2 gap-4">
        <img :src="pip1" alt="pip1" class="w-full h-auto" />
        <img :src="pip2" alt="pip2" class="w-full h-auto" />
        <img :src="pip3" alt="pip3" class="w-full h-auto" />
        <img :src="pip4" alt="pip4" class="w-full h-auto" />
    </div>
    </div>
</template>
  
<script setup>
import pip1 from '@/assets/pip1.jpg';
import pip2 from '@/assets/pip2.jpg';
import pip3 from '@/assets/pip3.jpg';
import pip4 from '@/assets/pip4.jpg';
</script>