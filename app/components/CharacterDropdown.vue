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
      <SelectItem value="hski">
        <img src="~/assets/sd_icons/img_sd_hski_face-00.webp" class="size-8" />
        <span>Hanami Saki</span>
      </SelectItem>
      <SelectItem value="ttmr">
        <img src="~/assets/sd_icons/img_sd_ttmr_face-00.webp" class="size-8" />
        <span>Tsukimura Temari</span>
      </SelectItem>
      <SelectItem value="fktn">
        <img src="~/assets/sd_icons/img_sd_fktn_face-00.webp" class="size-8" />
        <span>Fujita Kotone</span>
      </SelectItem>
      <SelectItem value="amao">
        <img src="~/assets/sd_icons/img_sd_amao_face-00.webp" class="size-8" />
        <span>Arimura Mao</span>
      </SelectItem>
      <SelectItem value="kllj">
        <img src="~/assets/sd_icons/img_sd_kllj_face-00.webp" class="size-8" />
        <span>Katsuragi Lilja</span>
      </SelectItem>
      <SelectItem value="kcna">
        <img src="~/assets/sd_icons/img_sd_kcna_face-00.webp" class="size-8" />
        <span>Kuramoto China</span>
      </SelectItem>
      <SelectItem value="ssmk">
        <img src="~/assets/sd_icons/img_sd_ssmk_face-00.webp" class="size-8" />
        <span>Shiun Sumika</span>
      </SelectItem>
      <SelectItem value="shro">
        <img src="~/assets/sd_icons/img_sd_shro_face-00.webp" class="size-8" />
        <span>Shinosawa Hiro</span>
      </SelectItem>
      <SelectItem value="hrnm">
        <img src="~/assets/sd_icons/img_sd_hrnm_face-00.webp" class="size-8" />
        <span>Himesaki Rinami</span>
      </SelectItem>
      <SelectItem value="hume">
        <img src="~/assets/sd_icons/img_sd_hume_face-00.webp" class="size-8" />
        <span>Hanami Ume</span>
      </SelectItem>
      <SelectItem value="hmsz">
        <img src="~/assets/sd_icons/img_sd_hmsz_face-00.webp" class="size-8" />
        <span>Hataya Misuzu</span>
      </SelectItem>
      <SelectItem value="jsna">
        <img src="~/assets/sd_icons/img_sd_jsna_face-00.webp" class="size-8" />
        <span>Juo Sena</span>
      </SelectItem>
      <SelectItem value="atbm">
        <img src="~/assets/sd_icons/img_sd_atbm_face-00.webp" class="size-8" />
        <span>Amaya Tsubame</span>
      </SelectItem>
    </SelectContent>
  </Select>
</template>
