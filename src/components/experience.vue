<template>
  <h1 class="experienceHeader col-12 d-flex justify-content-center text-light fs-1">Experience</h1>
  <div class="d-flex flex-row justify-content-center">
      <div class="p-2">
          <section id="experience" class="experience container mt-5">
              <h2 class="mb-4">Experience & Education</h2>
              <p>This is what i have been doing lastest</p>
              <div class="timeline">
                  <div v-for="(item, index) in combinedTimeline" :key="index" class="timeline-item">
                      <div class="timeline-content">
                          <h3 class="h5">{{ item.title || item.degree }}</h3>
                          <p class="mb-1"><strong>{{ item.title ? 'Company:' : 'Institution:' }}</strong> {{ item.company || item.institution }}</p>
                          <p class="mb-0"><strong>Duration:</strong> {{ item.duration }}</p>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  </div>
</template>

<script setup>
const jobs = [
  {
      title: 'Web Developer (Intern)',
      company: 'Ordbogen.com',
      duration: 'aug 2024 - oct 2024'
  },
  {
      title: 'MultiMedia Designer (Intern)',
      company: 'Ordbogen.com',
      duration: 'feb 2023 - apr 2023'
  },
  {
      title: 'Student Assistant',
      company: 'UCL - Erhvervsakademi og Professionshøjskole.',
      duration: 'Jan 2022 - jan 2023'
  }
];

const education = [
  {
      degree: 'Profession Bachelor in Web Development',
      institution: 'UCL - Erhvervsakademi og Professionshøjskole.',
      duration: '2023 - 2025'
  },
  {
      degree: 'MultiMedia Designer',
      institution: 'UCL - Erhvervsakademi og Professionshøjskole.',
      duration: '2017 - 2019'
  }
];

const combinedTimeline = [...jobs, ...education];
</script>

<style scoped>
.experience {
  padding: 20px;
  border-radius: 8px;
  user-select: none;
}

.experience h2 {
  font-size: 24px;
  color: #fff;
}

.experience p {
  color: #fff;
}

.timeline {
  position: relative;
  padding: 20px 0;
  list-style: none;
}

.timeline:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #ddd;
  left: 50%;
  margin-left: -1px;
}

.timeline-item {
  position: relative;
  margin: 20px 0;
}

.timeline-item:before {
  content: '';
  position: absolute;
  left: 50%;
  width: 20px;
  height: 20px;
  background: #fff;
  border: 2px solid #ddd;
  border-radius: 50%;
  margin-left: -10px;
  top: 0;
}

.timeline-content {
  padding: 20px;
  background: #1f1a29;
  border: 1px solid #ddd;
  border-radius: 8px;
  position: relative;
  width: 45%;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

}

.timeline-content h3 {
  color: #fff;
}

.timeline-content p {
  color: #fff;
}

.timeline-item:nth-child(odd) .timeline-content {
  left: 0;
}

.timeline-item:nth-child(even) .timeline-content {
  left: 55%;
}

@media (max-width: 768px) {
  .experience {
      padding: 10px;
  }

  .experience h2 {
      font-size: 20px;
  }

  .timeline-content {
      width: 100%;
      left: 0 !important;
  }

  .timeline-item:nth-child(even) .timeline-content {
      left: 0;
  }
}
</style>