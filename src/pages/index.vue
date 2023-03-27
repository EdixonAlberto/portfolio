<template>
  <div class="projects">
    <h1>Proyectos</h1>

    <div class="container">
      <div class="project-card">
        <div class="header">
          <span>2022</span>

          <div class="star">
            <span>10</span>
            <Icons name="star" />
          </div>
        </div>

        <h4 class="title">Project Name</h4>
        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div class="badges">
          <a class="badge" href="#" target="_blank" rel="noopener noreferrer">
            <Icons name="github" />
            <span>Código</span>
          </a>

          <div class="badge">
            <Icons name="browser" />
            <span>Demo</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  width: 100%;

  h1 {
    font-size: 3rem;
  }

  .container {
    width: 100%;

    .project-card {
      width: 400px;
      height: 210px;
      padding: 25px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      row-gap: 14px;
      background: #fff;
      border: 1px solid $color-grey-lite;
      border-radius: 6px;

      .header {
        user-select: none;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .star {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          column-gap: 5px;

          .p-icon {
            width: 24px;
          }
        }
      }

      h4 {
        margin: 0;
        font-size: 1rem;
      }

      p {
        margin: 0;
        font-size: 0.875rem;
      }

      .badges {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        column-gap: 20px;

        .badge {
          cursor: pointer;
          user-select: none;
          width: 100px;
          padding: 0 5px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          column-gap: 5px;
          background: $color-white-dark;
          border: 1px solid $color-grey-lite;
          border-radius: 6px;

          .p-icon {
            width: 24px;
          }

          &:hover {
            border-color: $color-grey-dark;
          }
        }
      }
    }
  }
}
</style>
