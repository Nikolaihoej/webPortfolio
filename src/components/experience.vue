<template>
  <section id="experience" class="container">
    <h2 class="experienceHeader text-center pt-5 mb-5 ">Experience</h2>
    <div class="row">
      <div class="col-md-6">
        <h2 class="section-title mb-4">Work Experience</h2>
        <ul class="timeline">
          <li
            v-for="(job, index) in jobs" :key="job.title" class="timeline-item modern-fade-in" v-intersect :style="{ transitionDelay: (index * 200) + 'ms' }">
            <div class="timeline-content modern-card">
              <div>
                <h3 class="h5 mb-1 fw-semibold">{{ job.title }}</h3>
                <p class="mb-1"><strong>Company:</strong> {{ job.company }}</p>
                <p class="mb-1"><strong>Duration:</strong> {{ job.duration }}</p>
                <p v-if="job.description" class="mb-0">{{ job.description }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <h2 class="section-title mb-4">Education</h2>
        <ul class="timeline">
          <li v-for="(edu, index) in education" :key="index" class="timeline-item modern-fade-in" v-intersect :style="{ transitionDelay: (index * 200) + 'ms' }">
            <div class="timeline-content modern-card">
              <div>
                <h3 class="h5 mb-1 fw-semibold">{{ edu.degree }}</h3>
                <p class="mb-1"><strong>Institution:</strong> {{ edu.institution }}</p>
                <p class="mb-1"><strong>Duration:</strong> {{ edu.duration }}</p>
                <p v-if="edu.description" class="mb-0">{{ edu.description }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const vIntersect = {
  mounted(el) {
    el.classList.add('is-hidden');
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
  }
};

const jobs = ref([
  {
    title: 'App Developer / Digital Coordinator (Project position)',
    company: 'Total Ejendom Service',
    duration: 'Aug 2025 - Oct 2025',
    description: 'Developed and coordinated digital solutions for property management.'
  },
  {
    title: 'Digital Coordinator (Internship)',
    company: 'Total Ejendom Service',
    duration: 'Apr 2025 - Jun 2025',
    description: 'Assisted in digital transformation projects and internal communications.'
  },
  {
    title: 'Web Developer (Internship)',
    company: 'Ordbogen.com',
    duration: 'Aug 2024 - Oct 2024',
    description: 'Contributed to web application development and UI improvements.'
  },
  {
    title: 'MultiMedia Designer (Internship)',
    company: 'Ordbogen.com',
    duration: 'Feb 2023 - Apr 2023',
    description: 'Designed multimedia content for educational platforms.'
  },
  {
    title: 'Student Assistant',
    company: 'UCL - Erhvervsakademi og Professionshøjskole',
    duration: 'Jan 2022 - Jan 2023',
    description: 'Supported faculty with digital tools and student engagement.'
  }
]);

const education = ref([
  {
    degree: 'Professional Bachelor in Web Development',
    institution: 'UCL - Erhvervsakademi og Professionshøjskole',
    duration: '2023 - 2025',
    description: 'Specialized in modern web technologies and project management.'
  },
  {
    degree: 'Multimedia Designer',
    institution: 'UCL - Erhvervsakademi og Professionshøjskole',
    duration: '2017 - 2019',
    description: 'Focused on digital design, UX/UI, and multimedia production.'
  }
]);

// Register the directive for this component
defineExpose({ directives: { intersect: vIntersect } });
</script>

<style scoped>
.experienceHeader {
  font-size: 2.5rem;
  color: var(--text-main);
}

.section-title {
  font-size: 1.35rem;
  color: var(--text-main);
  border-bottom: 4px solid var(--text-main);
  padding-bottom: 8px;
  margin-bottom: 24px;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.modern-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, var(--secondary-bg) 100%);
  backdrop-filter: blur(18px) saturate(1.5);
  border-radius: 18px;
  border: 1.5px solid rgba(255,255,255,0.13);
  box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18), 0 1.5px 6px 0 rgba(0,0,0,0.13);
  transition: background .35s, backdrop-filter .35s, box-shadow .35s, transform 0.18s;
  overflow: hidden;
  padding: 22px 28px;
  margin-bottom: 22px;
}

.modern-card:hover {
  transform: translateY(-4px) scale(1.025);
  box-shadow: 0 12px 40px rgba(160,132,232,0.18);
  background: linear-gradient(135deg, rgba(255,255,255,0.28) 0%, var(--secondary-bg) 100%);
}

.timeline {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.timeline-content h3 {
  color: var(--text-main);
  font-weight: 600;
  margin-bottom: 6px;
}

.timeline-content p {
  color: var(--text-main);
  opacity: 0.60;
  font-size: 1rem;
  margin-bottom: 4px;
}

/* Intersection Observer Animation */
.timeline-item.is-hidden {
  opacity: 0;
  transform: translateY(30px);
}
.timeline-item.is-visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s cubic-bezier(.4,0,.2,1) var(--delay,0ms), transform 0.6s cubic-bezier(.4,0,.2,1) var(--delay,0ms);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
  from {
    opacity: 0;
    transform: translateY(30px);
  }
}
</style>