<template>
  <div>

    <h1>Member detail page</h1>

  </div>
</template>

<script>

export default {
    name: 'memberdetails',
    data: () => ({
        dataSource: [],
    }),
    created () {
        for(let i=0; i<10; i++) {
            this.dataSource.push({
                id: i + 1,
                name: 'Leon' + (i + 1),
                last: '2020-09-' + (7 + i),
                member: '2020-09-' + (14 + i),
                points: i * 2 + 3,
                wallet: i * 5 + 2,
                img: 'https://source.unsplash.com/Mv9hjnEUHR4/30x30'
            })
        }
    }
}
</script>
