<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const selected = ref('jsna')
</script>

<template>
  <Select v-model="selected">
    <SelectTrigger>
      <SelectValue placeholder="Select an idol" />
    </SelectTrigger>
    <SelectContent align="center">
      <SelectItem value="hski">Hanami Saki</SelectItem>
      <SelectItem value="ttmr">Tsukimura Temari</SelectItem>
      <SelectItem value="fktn">Fujita Kotone</SelectItem>
      <SelectItem value="amao">Arimura Mao</SelectItem>
      <SelectItem value="kllj">Katsuragi Lilja</SelectItem>
      <SelectItem value="kcna">Kuramoto China</SelectItem>
      <SelectItem value="ssmk">Shiun Sumika</SelectItem>
      <SelectItem value="shro">Shinosawa Hiro</SelectItem>
      <SelectItem value="hrnm">Himesaki Rinami</SelectItem>
      <SelectItem value="hume">Hanami Ume</SelectItem>
      <SelectItem value="hmsz">Hataya Misuzu</SelectItem>
      <SelectItem value="jsna">Juo Sena</SelectItem>
      <SelectItem value="atbm">Amaya Tsubame</SelectItem>
    </SelectContent>
  </Select>
</template>
